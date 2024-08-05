import { IPostResponse } from "../models/home.model";

export const printPost = (post : IPostResponse) : HTMLElement => {

    const {id, title, body, estimatedPublicationDate, platform, postUrl} = post;

    const cardContainer = document.createElement('article') as HTMLElement;
    cardContainer.className = 'card-container';

    const cardImage = document.createElement('img') as HTMLImageElement;
    cardImage.className = 'card-image';

    const cardInformation = document.createElement('div') as HTMLElement;
    cardInformation.className = "card-information";

    const cardTitle = document.createElement('h3') as HTMLHeadElement;
    cardTitle.className = 'card-title';

    const cardDate = document.createElement('p') as HTMLParagraphElement;
    const cardDescription = document.createElement('p') as HTMLParagraphElement;
    const cardPlatform = document.createElement('p') as HTMLParagraphElement;
    
    cardImage.src = postUrl;
    cardTitle.innerText = title;
    cardDate.innerText = String(estimatedPublicationDate);
    cardPlatform.innerText = platform;
    cardDescription.innerHTML = body;

    cardInformation.append(cardTitle, cardDate,cardPlatform, cardDescription);

    const buttonContainer = document.createElement('div') as HTMLDivElement;
    buttonContainer.className = 'button-container';

    const editButton = document.createElement('button') as HTMLButtonElement;
    editButton.innerText = 'edit';
    editButton.className = 'editButton';
    editButton.setAttribute('data-id', String(id));

    const deleteButton = document.createElement('button') as HTMLButtonElement;
    deleteButton.innerText = 'delete';
    deleteButton.className = 'deleteButton';
    deleteButton.setAttribute('data-id', String(id));

    buttonContainer.append(editButton, deleteButton);

    cardContainer.append(cardImage, cardInformation, buttonContainer);

    return cardContainer;
}