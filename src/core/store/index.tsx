import { createContext } from "react";
import { useLocalObservable } from "mobx-react-lite";

import { layout, Layout } from "./pieces/layout";

export const combinedStore = { layout };
export const storeContext = createContext<StoreContext>(combinedStore);
export function StoreProvider({ children }: { children: React.ReactNode }) {
	const store = useLocalObservable(() => combinedStore);
	return <storeContext.Provider value={store}>{children}</storeContext.Provider>;
}

export type StoreContext = {
	layout: Layout;
};
