import * as React from 'react'
import AutoAffix from 'react-overlays/lib/AutoAffix'

interface AffixWrapperProps {}
interface AffixWrapperState {
  affixed: boolean
}

export default class AffixWrapper extends React.Component<AffixWrapperProps, AffixWrapperState> {
  componentWillMount() {
    this.setState({ affixed: false })
  }

  private content: any
  private contentHeight: number

  render() {
    return (
      <div>
        <AutoAffix
          {...this.props}
          onAffix={() => this.setState({ affixed: true })}
          onAffixTop={() => this.setState({ affixed: false })}
          affixStyle={{ zIndex: 200 }}
        >
          <div ref={c => (this.content = c)}>{this.props.children}</div>
        </AutoAffix>

        {this.state.affixed && <div style={{ width: '100%', height: this.contentHeight - 20 }} />}
      </div>
    )
  }

  componentDidMount() {
    this.updateHeight()
  }

  componentDidUpdate() {
    this.updateHeight()
  }

  updateHeight() {
    this.contentHeight = Math.max(this.content.scrollHeight, this.content.offsetHeight, this.content.clientHeight)
  }
}
