export namespace Schema {
	export type Store<F extends SchemaBase.Store> = {
		[K in keyof F]: {
			value: F[K];
			set: (value: F[K]) => void;
		};
	};
}

export namespace SchemaBase {
	export type Store = { [s: string]: any };
	export type Table = { [s: string]: any };
}
