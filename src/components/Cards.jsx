import React from 'react'
import clsx from 'clsx'
import Translate from '@docusaurus/Translate'
import Link from '@docusaurus/Link'

const Playgrounds = [
  {
    name: '📦 CodeSandbox',
    url: 'https://docusaurus.new/codesandbox',
    style: {
      background: '',
      color: 'black',
    },
    description: (
      <Translate id="playground.codesandbox.description">
        CodeSandbox is a popular playground solution. Runs Docusaurus in a
        remote Docker container.
      </Translate>
    ),
  },
  {
    name: '⚡ StackBlitz 🆕',
    url: 'https://docusaurus.new/stackblitz',
    style: {
      color: 'black'
    },
    description: (
      <Translate
        id="playground.stackblitz.description"
        values={{
          webContainersLink: (
            <Link href="https://blog.stackblitz.com/posts/introducing-webcontainers/">
              WebContainers
            </Link>
          ),
        }}
      >
        {
          'StackBlitz uses a novel {webContainersLink} technology to run Docusaurus directly in your browser.'
        }
      </Translate>
    ),
  },
]

function PlaygroundCard({ name, url, style, description }) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('super-card card')} style={style}>
        <div className={clsx('super-card-box')}>
          <div className="card__body">
            <h3 className={clsx('super-card-header')}>{name}</h3>
          </div>
          <div className="card__footer">
            <div className="" style={{display: 'flex', justifyContent: 'flex-end'}}>
              <div className="button-group button-group--block">
                <Link className="button" to={url}>
                  <Translate id="playground.tryItButton">Try it now!</Translate>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PlaygroundCardsRow() {
  return (
    <div className="row" style={{flexWrap: "nowrap"}}>

      {Playgrounds.map((playground) => (
        <PlaygroundCard key={playground.name} {...playground} />
      ))}
    </div>
  )
}
