import user from "./user.json"

const withUserDataAndPermissions = (WrappedComponent) => {
    const isAdmin = user.isAdmin;

    const canAccessReports = user.isReportAccessible;
    return function (props) {
        return <WrappedComponent {...props} user={user} isAdmin={isAdmin} canAccessReports={canAccessReports} />
    }
}

export default withUserDataAndPermissions;
