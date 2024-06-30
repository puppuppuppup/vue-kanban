import { Account, Client, Databases, Storage } from 'appwrite';
import { APP_ID } from '~/const/appwrite.const';

export const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject(APP_ID);

export const account = new Account(client);
export { ID } from 'appwrite';
export const databases = new Databases(client);
