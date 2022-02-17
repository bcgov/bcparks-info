# Alert

## How to use:

First you must put this in the root of your app:

`<app-alert-container></app-alert-container>`

Then, from anywhere else in your app you can do the following:

`this.alertService.pushAlert({ type: 'success', message: 'wuddup' }, 2000);`

The first parameter uses the following interface:

`
export interface IAlert {
    type: string;
    message: string;
}
`

To change the background of the alert you can use any of the following:

`
{
type: 'success',
message: 'This is an success alert',
},
{
type: 'info',
message: 'This is an info alert',
},
{
type: 'warning',
message: 'This is a warning alert',
},
{
type: 'danger',
message: 'This is a danger alert',
},
{
type: 'primary',
message: 'This is a primary alert',
},
{
type: 'secondary',
message: 'This is a secondary alert',
},
{
type: 'light',
message: 'This is a light alert',
},
{
type: 'dark',
message: 'This is a dark alert',
}
`

The second parameter is the the time in ms for the alert to auto-dismiss. If you want it to stay until manually dismissed, do not include the parameter or set the parameter to 0.