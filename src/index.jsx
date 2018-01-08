import React from "react";
import ReactIScroll from "react-iscroll";

export default class InfiniteScroller extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            visibleItems: this.getInitialItems ()
        };
        this.scrollStart = this.scrollStart.bind(this);
    }
    getInitialItems ()
    {
        let result = [];
        for (let i = this.props.initialMin; i < this.props.initialMax; i++)
            result.push (this.props.callback(i));
        return result;
    }
    getOptions ()
    {
        return {
            probeType: 2
        };
    }
    render ()
    {
        return (
            <div className="InfiniteScroller">
                <ReactIScroll
                    iScroll={this.props.iScroll}
                    options={this.getOptions()}
                    onScrollStart={this.scrollStart}>
                    <div className="ScrollableContent">
                        { this.state.visibleItems }
                    </div>
                </ReactIScroll>
            </div>
        );
    }
    scrollStart (event)
    {
        console.log ("Scroll starting", event);
    }
}
