export interface Scroll {
    scrollBars: string,
}

export interface ScrollProperty extends Scroll {
    scrollHeight: number,
    scrollLeft: number,
    scrollTop: number,
    scrollWidth: number,
    keepScrollsBarsVisible:string
}

