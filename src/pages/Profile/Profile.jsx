import { useContext } from "react"
import { ProfileContext } from "../Context/ProfileContext"
import "./Profile.scss";

export default function Profile(){

    const {profile} = useContext(ProfileContext)
   
    return <div className="c-profile">
        
        <img className="c-profile__img" src={profile.image} alt="" />
        <h4>{profile.name} - {profile.species}</h4>
    </div>
}