import React from 'react'

class Hover extends React.Component {
    state = {
        hovering: false,
    }

    mouseOver = () => {
        this.setState({
            hovering: true,
        })
    }

    mouseOut = () => {
        this.setState({
            hovering: false,
        })
    }

    render() {

        return (
            <div
                onMouseOver={this.mouseOver}
                onMouseOut={this.mouseOut}
            >
                {this.props.children(this.state.hovering)}
            </div>
        )
    }
}

export const Tooltip=({ text, children })=> {
    return (
        <Hover>
            {(hovering) => (
                <div className="tooltip-container">
                    {hovering === true && <div className="tooltip">{text}</div>}
                    {children}
                </div>
            )}
        </Hover>
    )
}
