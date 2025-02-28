import "server-only"

const serverUtils = () => {
    const result = 'serverUtils like using db, using env variables, doing heavy computation'
    return result
}

export {serverUtils}