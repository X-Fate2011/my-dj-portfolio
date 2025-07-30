import MixcloudPlayer from "../components/MixcloudPlayer.tsx";

function MixesPage() {
    
    return (
        <div className="p-4 md:p-6 lg:p-8">
            <MixcloudPlayer limit={10} showLoadMoreButton={true} variant="list"/>
        </div>
    )
}

export default MixesPage
