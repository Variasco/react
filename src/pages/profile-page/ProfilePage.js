import { Input, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    toggleVisibleProfile,
    updateProfile,
    profileSelector,
} from "../../store";

export const ProfilePage = () => {
    const state = useSelector(profileSelector);
    const [profile, setProfile] = useState({
        firstName: state.firstName,
        lastName: state.lastName,
    });
    const dispatch = useDispatch();

    const changeFormHandler = (e) => {
        const field = e.target.getAttribute("data-name");

        setProfile({
            ...profile,
            [field]: e.target.value,
        });
    };

    return (
        <div className="profile-container">
            <h1 className="profile-header">Profile Page</h1>
            {state.isVisible ? (
                <>
                    <p>First name: {state.firstName}</p>
                    <p>Last name: {state.lastName}</p>
                    <button onClick={() => dispatch(toggleVisibleProfile())}>
                        Скрыть профиль
                    </button>
                </>
            ) : (
                <>
                    <p>Профиль скрыт</p>
                    <button onClick={() => dispatch(toggleVisibleProfile())}>
                        Открыть профиль
                    </button>
                </>
            )}
            <div className="profile-form">
                <Input
                    className="profile-form__input"
                    inputProps={{ "data-name": "firstName" }}
                    onChange={changeFormHandler}
                    type="text"
                    placeholder="First name"
                    value={profile.firstName}
                />
                <Input
                    className="profile-form__input"
                    inputProps={{ "data-name": "lastName" }}
                    onChange={changeFormHandler}
                    type="text"
                    placeholder="Last name"
                    value={profile.lastName}
                />
                <Button onClick={() => dispatch(updateProfile(profile))}>
                    Save
                </Button>
            </div>
        </div>
    );
};
