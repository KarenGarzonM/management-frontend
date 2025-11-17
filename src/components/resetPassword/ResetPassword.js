import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { showAlert } from '../../functions';

// Componente renombrado a ResetPassword
const ResetPassword = () => {
    const [phone, setPhone] = useState('');
    const [userFound, setUserFound] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [loadingReset, setLoadingReset] = useState(false);

    const navigate = useNavigate();

    const handleSearchUser = async (e) => {
        e.preventDefault();

        if (!phone) return showAlert('Please enter a phone Number', 'warning');

        setLoadingSearch(true);

        try {
            const response = await axios.get(`http://localhost:8080/api/auth/search-by-phone/${phone}`);

            if (response.data.success) {
                setUserFound(true);
                showAlert('User found. You can update the password now', 'success');
            }
        } catch (error) {
            setUserFound(false);

            if (error.response) {
                showAlert(error.response.data.message || 'User not found', 'error');
            } else {
                showAlert('Error connecting to server', 'error');
            }
        } finally {
            setLoadingSearch(false);
        }
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();

        if (!newPassword || !confirmPassword) {
            showAlert('All password fields are required', 'warning');
            return;
        }

        if (newPassword !== confirmPassword) {
            showAlert('Passwords do not match', 'error');
            return;
        }

        setLoadingReset(true);

        try {
            const response = await axios.put(
                'http://localhost:8080/api/auth/reset-password',
                {
                    phone,
                    newPassword,
                    confirmPassword
                }
            );

            if (response.data.success) {
                showAlert('Password updated successfully!', 'success');

                setTimeout(() => {
                    navigate('/login');
                }, 1500);
            }
        } catch (error) {
            if (error.response) {
                showAlert(error.response.data.message || 'Error updating password', 'error');
            } else {
                showAlert('Server error', 'error');
            }
        } finally {
            setLoadingReset(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-card-wrapper">
                    <div className="login-card">
                        <div className="mb-3">
                            <button 
                                className="btn btn-login"
                                style={{ 
                                    width: "36px",
                                    height: "32px",
                                    padding: "0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1rem"
                                }}
                                onClick={() => navigate('/login')}
                            >
                                <i className="bi bi-arrow-left"></i>
                            </button>
                        </div>
                        {/* HEADER */}
                        <div className="login-header">
                            <div className="login-logo">CRUD</div>
                            <h1>WELCOME</h1>
                            <p>Enter the phone number to change the password</p>
                        </div>

                        {/* SEARCH FORM */}
                        <form onSubmit={handleSearchUser}>
                            <div className="form-floating mb-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                                <label><i className="bi bi-telephone-fill me-2"></i>Phone</label>
                            </div>

                            <div className="d-grid mb-3">
                                <button
                                    type="submit"
                                    className="btn btn-login"
                                    disabled={loadingSearch}
                                >
                                    {loadingSearch ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2"></span>
                                            Searching...
                                        </>
                                    ) : (
                                        'Search user'
                                    )}
                                </button>
                            </div>
                        </form>

                        {/* PASSWORD FIELDS (SHOW ONLY IF USER FOUND) */}
                        {userFound && (
                            <form onSubmit={handleChangePassword}>
                                <div className="form-floating mb-4">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="New password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                    />
                                    <label><i className="bi bi-lock-fill me-2"></i>New password</label>
                                </div>

                                <div className="form-floating mb-4">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Confirm password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                    <label><i className="bi bi-lock-fill me-2"></i>Confirm password</label>
                                </div>

                                <div className="d-grid">
                                    <button
                                        type="submit"
                                        className="btn btn-login"
                                        disabled={loadingReset}
                                    >
                                        {loadingReset ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2"></span>
                                                Updating...
                                            </>
                                        ) : (
                                            'Reset password'
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}

                        {/* FOOTER */}
                        <div className="login-divider">
                            <span>CRUD Management System</span>
                        </div>

                        <div className="login-footer">
                            <p>Password recovery system</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;