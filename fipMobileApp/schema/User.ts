import { Schema } from "./Schema";


export const UserSchema : Schema = {
    name: 'User',
    primaryKey: '_id',
    properties: {
        firstName:   'string',
        lastName:   'string',
        email:      'string?',
        password: 'string?',
        phone:    'string?',
    }
}