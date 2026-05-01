import AdminPanel from "./AdminPanel";
import withUserDataAndPermissions from "./hoc/withUserDataAndPermissions";
import ProfilePage from "./ProfilePage";
import ReportsPage from "./ReportsPage";

const WithAdminPanel = withUserDataAndPermissions(AdminPanel)
const WithProfilePage = withUserDataAndPermissions(ProfilePage)
const WithReportsPage = withUserDataAndPermissions(ReportsPage)

const AdminDashboardWithHoc = () => {
    return (
        <div>
            <WithProfilePage page="Profile Page" />
            <WithAdminPanel page="Admin Panel" />
            <WithReportsPage page="Reports Page" />
        </div>
    )
}

export default AdminDashboardWithHoc;   