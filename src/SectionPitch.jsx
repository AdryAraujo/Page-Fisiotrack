import ReactPlayer from "react-player";
import './SectionPitch.css'


export function SectionPitch() {
    return (
        <div id="pitch" className="section-pitch">
            <h2>Pitch</h2>
            <ReactPlayer
                url='https://youtu.be/CJp7sQTZAwc'
                width="80%"
                height="100%"/>
        </div>
    )
}