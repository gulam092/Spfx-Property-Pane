import * as React from 'react';
import styles from './SpfxwebComponent.module.scss';
import { ISpfxwebComponentProps } from './ISpfxwebComponentProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IDateTimeFieldValue } from "@pnp/spfx-property-controls";
export default class SpfxwebComponent extends React.Component<ISpfxwebComponentProps, {}> {
  public render(): React.ReactElement<ISpfxwebComponentProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.spfxwebComponent} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <img alt="this is Imaran and
           Gulam" src={isDarkTheme ? require('../assets/My-project.png') : require('../assets/My-project.png')} className={styles.MyImage} />
          <img alt="" src={isDarkTheme ? require('../assets/second-method-for.png') : require('../assets/second-method-for.png')} className={styles.welcomeImage} />
          <h2>Hello I Am Gulam</h2>
          {/* <h2 style={{color:this.props.color}}>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div> */}
          {/* <div>Web part property value: <strong>{escape(description)}</strong></div> */}
        </div>
        {/* color:{this.props.color} */}
        <h2 style={{color:this.props.color}}>WELCOME TO GULAM KHAN</h2>
        {/* {this.props.datetime} */}
        <div>
          <h2 style={{color:this.props.color}}>This is About Employee Details</h2>
          <h2 style={{color:this.props.color}}><p>Name :{this.props.name}</p></h2>
          <h2 style={{color:this.props.color}}><p>Age :{this.props.age}</p></h2>
          <h2 style={{color:this.props.color}}><p>Location :{this.props.location}</p></h2>
          <h2 style={{color:this.props.color}}><p>About  :{this.props.about}</p></h2>
          
         
          {/* <h3 style={{color:this.props.color}}>ListID:</h3>{this.props.lists} */}
         
          
        
          
        </div>
      </section>
    );
  }
}
