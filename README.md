22 / 01 / 2023:

-REQUIRED: this time we were asked to develop a website to help people to find her favorites animes, to save them as "favorites" and they could be able to add or delete those animes any time the wanted.

At first, we should create the GitHub repository and the folders for this project (we could use the starter kit or not, as our choice).
CSS Style is not the final goal of this exercise.

-The website has to show a fieldset for the search and a button to send the information to https://docs.api.jikan.moe/, the API which will provide us from all the information needed to build this project.
-The URL must be created with the base URL and the user's title choice, for what is necessary to get the value from the text's input of the search form.
-A card with the relative anime's information(title and picture) should will appear on a first section or list on the right side of the screen, and if they show up without an own picture, we should replace it with a model from https://via.placeholder.com/210x295/ffffff/666666/?text=TV. (**placehold.co better instead, because first option is not working anymore).
-We can choose to add elements from our Javascript file to the HTML file with the innerHTML property or by adding those elements with a more advanced DOM skills.
-Once we get results, the user should be able to add its favorites anime choices by clicking on the DOM elements: this action will change the font color and also the background color on the right section and also add this  new selection to the left section or list ("favorites anime");
-If a new search is runned, the left favorite's list will still be visible.
-Finally, we must keep on Local Storage all this information and when the webiste will be "refreshed", all favorite items will still existing.

AS A BONUS TASKS:
-The student could add the "delete option" from each anime card and also on a way to erase all of them at the same time.
The user should have the choice to "click" those items to add or remove his favorites.
-If a new search is runned and there is a coincidence with an anime who is already a "favorite" one, the special class (different colors) will show it.
-We can also code a reset button and design the CSS as we please to.
