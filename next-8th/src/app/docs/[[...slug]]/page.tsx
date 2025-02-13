const Docs = async (props:Promise<{params:{slug:string[]}}>) => {
    const {slug} = (await props).params;

    if(slug?.length ==2 ) {
        return `Viewing docs for feature ${slug[0]} and concept ${slug[1]}`
    }

    if(slug?.length == 1) {
        return `Viewing docs for feature ${slug[0]}`
    }

    return "Viewing docs"
}

export default Docs