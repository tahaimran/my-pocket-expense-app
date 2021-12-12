import React from 'react'

export default function VideoTemp(props) {
    return (
        <div className='col-md-4 text-center'>
            
            <iframe   src={props.src}
                title="YouTube video player" frameborder="0" height={'200px'} width={'auto'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
    )
}
