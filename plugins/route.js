export default ({ app }) => {
    app.router.afterEach((to, from) => {
        if (process.client) {
            const password = sessionStorage.getItem('password');
            console.log(to.path)
            if(!password && password !== "69886" && to.path !== '/login') {
                window.location.href = "/login"
            }
        }
    })
}

