const AdminPanel = ({ isAdmin }) => {

  if (!isAdmin) {
    return <h1>Access Denied</h1>;
  }

  return (
    <div>
      <h1>Admin Panel</h1>
    </div>
  );
};

export default AdminPanel;