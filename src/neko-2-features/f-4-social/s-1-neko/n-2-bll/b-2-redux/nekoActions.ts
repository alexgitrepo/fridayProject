export const NEKO_LOADING = 'NEKO/LOADING';
export const NEKO_ERROR = 'NEKO/ERROR';
export const NEKO_SUCCESS = 'NEKO/SUCCESS';

export const NEKO_SET_NAME = 'NEKO/SET_NAME';

interface INekoSetName {
    type: typeof NEKO_SET_NAME;

}

export type INekoActions = INekoSetName;

export const nekoSetName = (): INekoSetName => ({
    type: NEKO_SET_NAME,

});
