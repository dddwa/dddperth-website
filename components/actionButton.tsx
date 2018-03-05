import * as React from 'react';
import { StatelessComponent } from 'react';
import { Action } from '../config/types';
import Link from 'next/link';

interface ActionButtonProps {
  action: Action;
}

const ActionButton : StatelessComponent<ActionButtonProps> = ({action}) =>
  <Link href={action.Url}><a className={"btn " + action.Category}>{action.Title}</a></Link>;

export default ActionButton;
