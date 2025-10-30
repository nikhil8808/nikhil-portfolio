

export const getAsset = (name: string, ext: string): string => {
	// Use import.meta.url + new URL so Vite can resolve assets at build time.
	// Returns a string URL that can be used as src in <img src={...} />
	return new URL(`../assets/images/${name}.${ext}`, import.meta.url).href
}

export const getSvg=(name: string)=>{

    return new URL(`../assets/svgs/${name}.svg`, import.meta.url).href
}

