// render chat templates to the DOM
// clear the list of chats when the room changes

class ChatUI {
    constructor(list){
        this.list = list;      
    }
    clear(){
        this.list.innerHTML = '';
    }
    render(data){
        const today = new Date();
        const timeBetween = (today.getTime()/1000) - data.created_at.seconds; //in seconds

        if(timeBetween < 60){
            this.when = 'less than a minute ago';
        } else if(timeBetween >= 60 && timeBetween < (60*60)){
            this.when = `${Math.round(timeBetween/60)} minutes ago`;
        } else if(timeBetween >= (60*60) && timeBetween < (60*60*24)){
            const hours = Math.round(timeBetween/(60*60));
            if(hours === 1){
                this.when = 'an hour ago';
            } else{
                this.when = `${hours} hours ago`; 
            }
        } else if(timeBetween >= (60*60*24) && timeBetween < (60*60*24*7)){
            const days = Math.round(timeBetween/(60*60*24));
            if(days === 1){
                this.when = 'yesterday';
            } else{
                this.when = `${days} days ago`; 
            }
        } else if(timeBetween >= (60*60*24*7) && timeBetween < (60*60*24*7*4)){
            const weeks = Math.round(timeBetween/(60*60*24*7));
            if(weeks === 1){
                this.when = 'an week ago';
            } else{
                this.when = `${weeks} weeks ago`; 
            }
        } else if(timeBetween >= (60*60*24*7*4) && timeBetween < (60*60*24*7*4*12)){
            const months = Math.round(timeBetween/(60*60*24*7*4));
            if(months === 1){
                this.when = 'about a month ago';
            } else{
                this.when = `about ${months} months ago`; 
            }
        } else if(timeBetween >= (60*60*24*7*4*12)){
            const years = Math.round(timeBetween/(60*60*24*7*4*12));
            if(years === 1){
                this.when = 'about a year ago';
            } else{
                this.when = `about ${years} years ago`; 
            }
        }
        
        // TODO - can't seem to import the specific function using node.js
        // const when = dateFns.distanceInWordsToNow(
        //     data.created_at.toDate(),
        //     {addSuffix: true}
        // );

        const html = `
        <li class="list-group-item">
            <span class="username">${data.username}:</span>
            <span class="message">${data.message}</span>
            <div class="time">${this.when}</div>
        </li>`;

        this.list.innerHTML += html;
    }
}