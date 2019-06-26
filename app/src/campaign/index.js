import React from 'react';
import './Campaign.css';
import ScrollBox from '../scrollBox';

class Campaign extends React.Component {

    componentDidUpdate() {
        console.log(this.props.campaignItem);
    }

    render() {
        const props =  this.props.campaignItem;
        if(props !== undefined){
            return (
                <div className="Campaign">
                    <div className="CampaignHeader">
                        <div className="AppLogo">
                            {
                                <img src={props.campaign_icon_url} alt={props.campaign_name} />
                            }
                        </div>
                        <div className="CampaignName">
                            <p>{props.campaign_name}</p>
                            
                        </div>
                        <div className="CampaignPayPerInstall">
                            <p>{props.pay_per_install} per install</p>
                        </div>
                        <ScrollBox media= {props.medias} />
                    </div>
                </div>
            );
        }
        
    }
}
export default Campaign;