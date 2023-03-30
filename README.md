# Owlbear Rodeo Battle Tracker

A basic battle tracker with a shared view for you and your players, GM can keep track of HP of monsters and players, healing and damage. Players can't see monsters health information.

Built based on https://github.com/owlbear-rodeo/initiative-tracker

## Installing

The extension can be installed from the [store page](https://extensions.owlbear.rodeo/initiative-tracker).

## How it Works

This project is a simple [React](https://reactjs.org/) app.

It communicates with Owlbear Rodeo to create context menu items. When those menu items are clicked it edits the metadata of the item with an initiative, health and damage values.

## Building

This project uses [Yarn](https://yarnpkg.com/) as a package manager.

To install all the dependencies run:

`yarn`

To run in a development mode run:

`yarn dev`

To make a production build run:

`yarn build`

## License

GNU GPLv3

Copyright (C) 2023 Platon Mysnyk

