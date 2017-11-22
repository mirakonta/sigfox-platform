/* tslint:disable */
import {
  Device,
  User,
  Organization
} from '../index';

declare var Object: any;
export interface MessageInterface {
  "deviceId": string;
  "time": number;
  "seqNumber": number;
  "data"?: string;
  "ack"?: boolean;
  "reception"?: Array<any>;
  "geoloc"?: Array<any>;
  "parsed_data"?: Array<any>;
  "id"?: number;
  "DeviceId"?: string;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "userId"?: number;
  "organizationId"?: string;
  "OrganizationId"?: string;
  Device?: Device;
  user?: User;
  Organization?: Organization;
}

export class Message implements MessageInterface {
  "deviceId": string = '';
  "time": number = 0;
  "seqNumber": number = 0;
  "data": string = '';
  "ack": boolean = false;
  "reception": Array<any> = <any>[];
  "geoloc": Array<any> = <any>[];
  "parsed_data": Array<any> = <any>[];
  "id": number = 0;
  "DeviceId": string = '';
  "createdAt": Date = new Date(0);
  "updatedAt": Date = new Date(0);
  "userId": number = 0;
  "organizationId": string = '';
  "OrganizationId": string = '';
  Device: Device = null;
  user: User = null;
  Organization: Organization = null;
  constructor(data?: MessageInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Message`.
   */
  public static getModelName() {
    return "Message";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Message for dynamic purposes.
  **/
  public static factory(data: MessageInterface): Message{
    return new Message(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Message',
      plural: 'Messages',
      path: 'Messages',
      properties: {
        "deviceId": {
          name: 'deviceId',
          type: 'string'
        },
        "time": {
          name: 'time',
          type: 'number'
        },
        "seqNumber": {
          name: 'seqNumber',
          type: 'number'
        },
        "data": {
          name: 'data',
          type: 'string'
        },
        "ack": {
          name: 'ack',
          type: 'boolean'
        },
        "reception": {
          name: 'reception',
          type: 'Array&lt;any&gt;'
        },
        "geoloc": {
          name: 'geoloc',
          type: 'Array&lt;any&gt;'
        },
        "parsed_data": {
          name: 'parsed_data',
          type: 'Array&lt;any&gt;'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "DeviceId": {
          name: 'DeviceId',
          type: 'string'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
        "userId": {
          name: 'userId',
          type: 'number'
        },
        "organizationId": {
          name: 'organizationId',
          type: 'string'
        },
        "OrganizationId": {
          name: 'OrganizationId',
          type: 'string'
        },
      },
      relations: {
        Device: {
          name: 'Device',
          type: 'Device',
          model: 'Device'
        },
        user: {
          name: 'user',
          type: 'User',
          model: 'User'
        },
        Organization: {
          name: 'Organization',
          type: 'Organization',
          model: 'Organization'
        },
      }
    }
  }
}
