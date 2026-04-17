import { useParams, Link } from "react-router-dom";

function ProjectDetailPage(){
    const { id } = useParams<{id: string}>()

    return (
        <div className="p-8">
            <Link to="/" className="text-blue-500 underline">
                Nazad
            </Link>
            <h1 className="text-2xl mt-4">Project: {id}</h1>
        </div>
    )
}

export default ProjectDetailPage;