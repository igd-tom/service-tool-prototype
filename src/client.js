import * as sapper from '@sapper/app';

console.log("called")

sapper.start({
	target: document.querySelector('#sapper')
});