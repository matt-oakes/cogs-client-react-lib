# COGS Client React library

Create content for your COGS Media Master

## [Documentation](https://clockwork-dog.github.io/cogs-client-react-lib/)

## Add to your project

```shell
npm install --save @clockworkdog/cogs-client-react
```

or

```shell
yarn add @clockworkdog/cogs-client-react
```

## Usage

Import the library

```ts
import { CogsConnection, AudioPlayer } from '@clockworkdog/cogs-client';
import { Video, Timer, Hint, useIsConnected, useIsAudioPlaying } from '@clockworkdog/cogs-client-react';
```

or

```js
const { CogsConnection, AudioPlayer } = require('@clockworkdog/cogs-client');
const { Video, Hint, Timer, useIsConnected, useIsAudioPlaying } = require('@clockworkdog/cogs-client-react');
```

then

```tsx
const cogsConnection = new CogsConnection();
// Add audio playing capability
const audioPlayer = new AudioPlayer(cogsConnection);

function MyComponent() {
  const isConnected = useIsConnected(cogsConnection);
  const isAudioPlaying = useIsAudioPlaying(audioPlayer);

  return (
    <div>
      <div>Connected: {isConnected}</div>
      <div>Audio playing: {isAudioPlaying}</div>
      <div style={{ fontSize: 100 }}>
        {/* The time from the adjustable timer plugin in the format 'MM:SS' */}
        <Timer connection={cogsConnection} center />
      </div>
      <div style={{ fontSize: 20 }}>
        {/* The latest text hint as a string */}
        <Hint connection={cogsConnection} />
      </div>
      {/* Video overlay with the "fit" specified */}
      <Video connection={cogsConnection} fullscreen />
    </div>
  );
}
```

### Local development

When developing locally you should connect to COGS in "simulator" mode by appending `?simulator=true&t=media_master&name=MEDIA_MASTER_NAME` to the URL. Replace `MEDIA_MASTER_NAME` with the name of the Media Master you set in COGS.

For example, with your custom content hosted on port 3000, http://localhost:3000?simulator=true&t=media_master&name=Timer+screen will connect as the simulator for `Timer screen`.

#### Chrome permissions

Chrome's autoplay security settings mean that you will need to interact with the page before audio or video will play. You can disable this warning when developing by pressing `ℹ️` in Chrome's URL bar, opening `Site settings`, and setting `Sound` to `Allow`.

## Using create-react-app

If you're using `create-react-app` for your project, you'll need to configure the build to work with a relative path, as when accessed by a Media Master your project will not be served from the root path. This can be achieved by adding the following to your `package.json`:

```
"homepage": ".",
```

## Release process

1. Create a new commit with a bumped version number in `package.json`.
2. [Click here to create a new release on GitHub](https://github.com/clockwork-dog/cogs-client-react-lib/releases/new) where the Tag Version is the version from `package.json` prefixed with a `v`.

The release will be automatically built and released on npm.
