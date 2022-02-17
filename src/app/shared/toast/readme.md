# Toast

## How to use:

First you must put this in the root of your app:

`<app-toast-container aria-live="polite" aria-atomic="true"></app-toast-container>`

Then, from anywhere else in your app you can do the following:

`this.toastService.show('Success! Your Reservation has been submitted.', { classname: 'bg-success text-light', delay: 10000 });`

For class names, you are able to use Bootstrap classes for colours:

[https://getbootstrap.com/docs/5.0/utilities/colors/](https://getbootstrap.com/docs/5.0/utilities/colors/)
[https://getbootstrap.com/docs/5.0/utilities/background/](https://getbootstrap.com/docs/5.0/utilities/background/)