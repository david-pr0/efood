import { useParams } from "react-router-dom"
import Footer from "../../modules/Footer"
import Modal from "../../modules/Modal"
import ProfileHeader from "../../modules/ProfileHeader"
import ProfileHero from "../../modules/ProfileHero"
import ProfileListage from "../../modules/ProfileListage"
import { useAppSelector } from "../../assets/redux/store"

const Profile = () => {
    const { id } = useParams<{ id: string }>()
    const data = useAppSelector(state => state.data)
    const dataArray = Object.values(data)
    const filteredData = dataArray.filter(rest => String(rest.id) === id)
    const finalData = filteredData.flatMap(item => item.cardapio)

    return (
        <>
            <Modal />
            <ProfileHeader />
            <ProfileHero data={filteredData}/>
            <ProfileListage data={finalData}/>
            <Footer />
        </>
    )
}

export default Profile
