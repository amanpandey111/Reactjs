import LoadingSpinner from "./common/LoadingSpinner";
import ErrorMessage from "./common/ErrorMessage";
import ProfileHeader from './ProfileHeader'
import PostsList from "./PostsList";
import { useState } from "react";

const UserProfilePresenter = ({ user, posts, loading, error, onRetry, onUpdateUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  const handleSaveProfile = async() => {
    const result = await onUpdateUser(formData)
    if(result.success){
      setIsEditing(false);
    }
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    if(user){
      setFormData({
        name: user.name,
        email: user.email,
        bio: user.bio
      })
    }
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (loading) {
    return (
      <LoadingSpinner message='Loading User Profile...' />
    );
  }

  if (error) {
    return (
      <ErrorMessage
        title="Oop's Something Went Wrong!.."
        message={error}
        onRetry={onRetry}
      />
    );
  }

  return (
    <div className="user-profile">
      {/* <div className="profile-header">
        <img
          src={user.avatar || "/default-avatar.png"}
          alt={`${user.name}'s avatar`}
          className="avatar"
        />
        {!isEditing ? (
          <div className="profile-info">
            <h1>{user.name}</h1>
            <p className="email">{user.email}</p>
            <p className="bio">{user.bio}</p>
            <button onClick={() => setIsEditing(true)} className="edit-btn">
              Edit Profile
            </button>
          </div>
        ) : (
          <div className="profile-form">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Name"
            />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Email"
            />
            <textarea
              value={formData.bio}
              onChange={(e) => handleInputChange("bio", e.target.value)}
              placeholder="Bio"
            />
            <div className="form-actions">
              <button onClick={() => setIsEditing(false)}>Cancel</button>
              <button onClick={handleSaveProfile}>Save</button>
            </div>
          </div>
        )}
      </div> */}
      <ProfileHeader
        user={user}
        isEditing={isEditing}
        formData={formData}
        onStartEdit={()=>setIsEditing(true)}
        onInputChange={handleInputChange}
        onCancelEdit={handleCancelEdit}
        onSaveProfile={handleSaveProfile}
      />

      <PostsList posts={posts} />
    </div>
  )
}

export default UserProfilePresenter