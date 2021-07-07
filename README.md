# Feedr Technical Challenge

Thank you for taking the time to attempt this challenge.

These tests are used to evaluate candidates of all skill levels so please complete them to a level you feel is an accurate representation of your skill set.

Please read `README-FRONTEND.md` for further instructions.

If you have any questions or would like to clarify any details, please email nick@feedr.co.

Good luck!

# Quick Start
Fork the repository, clone it to your local system, then:

## Install dependencies
yarn (or npm install)

## Start development server
yarn dev (or npm run dev)

## Run tests
yarn test (or npm run test)

# Application Component Structure 

-   Main App (Handles Communication with all child components and also interact with server api)
    -   Header (shows count of items selected and sum of all selected dietaries)
    -   ItemNavigationPanel (displays navigation items and provides add item feature)
    -   ItemFilterPanel (allows user to search items)
    -   ItemPreviewPanel (previews item added by navigation panel)
        -   ItemPreview (represents preview of single item with remove option from preview panel)
    
Parent->Child communication happens through data flow using props.
Child->Parent communication happens through event reference using props.
