/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from "react";
import { Observer } from "mobx-react-lite";
import { useHistory } from "react-router";
import { useAPI, useUserProfile } from "@core/hooks";

import { Routes } from "@routes";

import { Suspense } from "@components/ordinary/Suspense";

import { authService } from "@core/services";
import { routesConfig } from "@core/config";

const App = () => {
	const userProfile = useUserProfile();
	const history = useHistory();
	const profileInfo = useAPI({
		service: authService.profileInfo,
		isPendingAfterMount: true,
		isRedirectOnAuthPageIfNotAuthorized: false,
		ignoreHTTPErrors: true,
	});

	const getProfileInfo = useCallback(async () => {
		try {
			const profileInfoResponse = await profileInfo.call();

			if (profileInfoResponse) {
				userProfile.setInfo(profileInfoResponse);
			}
		} catch (error) {
			console.error(error);
		}

		if (userProfile.isAuthorized() === false) {
			history.push(routesConfig.authBrowserRoutes.auth());
		}
	}, [history, profileInfo]);

	useEffect(() => {
		getProfileInfo();
	}, [getProfileInfo]);

	return (
		<Observer>
			{() => (
				<Suspense isWaiting={profileInfo.isPending()}>
					<Routes />
				</Suspense>
			)}
		</Observer>
	);
};

export { App };
