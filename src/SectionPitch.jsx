import ReactPlayer from "react-player";
import './SectionPitch.css'


export function SectionPitch() {
    return (
        <div className="section-pitch">
            <h2>Conheça nossa Solução</h2>
            <ReactPlayer
                url='https://youtu.be/-EjwkkFXtMA?si=QwPHUQU2L6s7lKWT'
                width="80%"
                height="100%"/>
        </div>
    )
}