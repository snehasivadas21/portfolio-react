import React from 'react'
import PropTypes from 'prop-types'

const ButtonPrimary = ({
    href,
    target='_self',
    label,
    icon,
    classes='',
    download
}) => {
    if (href){
        return (
            <a href={href} target={target} className={"btn btn-primary"+classes} download={download?download:undefined}>
                {label} 
                {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>
                : undefined}
            </a>
        )
    }else{
        return (
            <button className={'btn btn-outline' + classes}>
               {label} 
               {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>
                : undefined} 

            </button>
        )
    }
}
ButtonPrimary.prototype={
    label:PropTypes.string.isRequired,
    href:PropTypes.string,
    target:PropTypes.string,
    icon:PropTypes.string,
    classes:PropTypes.string,
    download:PropTypes.oneOfType([PropTypes.bool,PropTypes.string])
}


const ButtonOutline = ({
    href,
    target='_self',
    label,
    icon,
    classes
}) => {
    if (href){
        return (
            <a href={href} target={target} className={"btn btn-outline"+classes}>
                {label} 
                {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>
                : undefined}
            </a>
        )
    }else{
        return (
            <button className={'btn btn-outline' + classes}>
               {label} 
               {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>
                : undefined} 

            </button>
        )
    }
}
ButtonOutline.prototype={
    label:PropTypes.string.isRequired,
    href:PropTypes.string,
    target:PropTypes.string,
    icon:PropTypes.string,
    classes:PropTypes.string
}

export { ButtonPrimary,ButtonOutline};
