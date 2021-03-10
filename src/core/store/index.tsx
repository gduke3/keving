import { createContext } from "react";
import { useLocalObservable } from "mobx-react-lite";

import { layout, Layout } from "./pieces/layout";
import { application, Application } from "./pieces/application";
import { counters, Counters } from "./pieces/counters";

export const combinedStore = { layout, application, counters };
export const storeContext = createContext<StoreContext>(combinedStore);
export function StoreProvider({ children }: { children: React.ReactNode }) {
	const store = useLocalObservable(() => combinedStore);
	return <storeContext.Provider value={store}>{children}</storeContext.Provider>;
}

export type StoreContext = {
	layout: Layout;
	application: Application;
	counters: Counters;
};
