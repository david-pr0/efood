import Footer from "../../modules/Footer"
import Modal from "../../modules/Modal"
import ProfileHeader from "../../modules/ProfileHeader"
import ProfileHero from "../../modules/ProfileHero"
import ProfileListage from "../../modules/ProfileListage"

const Profile = () => {
    return (
        <>
            <Modal />
            <ProfileHeader />
            <ProfileHero />
            <ProfileListage />
            <Footer />
        </>
    )
}

export default Profile