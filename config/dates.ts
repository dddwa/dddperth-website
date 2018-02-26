import * as moment from 'moment';
import {Dates as IDates, Conference} from './types';

export default function getConferenceDates(conference : Conference) : IDates {
  const isComplete = moment(new Date()) > conference.Date.clone().add(1, 'd');
  const isInProgress = moment(new Date()) > conference.Date;
  const dateDisplayFormat = "ddd Do MMM YYYY";
  return {
    Display : conference.HideDate ? "TBA" : `${conference.Date.format(dateDisplayFormat)}`,
    DateDisplayFormat : dateDisplayFormat,
    TimeDisplayFormat : "h:mma",
    IsComplete : isComplete,
    IsInProgress : isInProgress && !isComplete,
    HasNotStarted : !isInProgress && !isComplete,
    // todo: add in registration close in case it's not sold out
    RegistrationOpen : moment(new Date()) > conference.RegistrationOpenFrom && !conference.IsSoldOut
  };
}



/*
 <li @Past(Conference.SubmissionsOpenFrom)>@Conference.SubmissionsOpenFrom.ToString("dd/MM/yyyy") - Submissions open</li>
    <li @Past(Conference.RegistrationOpenFrom)>@Conference.RegistrationOpenFrom.ToString("dd/MM/yyyy") - Registrations open</li>
    <li @Past(Conference.SubmissionsOpenUntil)>@Conference.SubmissionsOpenUntil.ToString("dd/MM/yyyy") - Submissions closed</li>
    <li @Past(Conference.VotingOpenFrom)>@Conference.VotingOpenFrom.ToString("dd/MM/yyyy") - Voting open</li>
    <li @Past(Conference.VotingOpenUntil)>@Conference.VotingOpenUntil.ToString("dd/MM/yyyy") - Voting closed</li>
    <li @Past(Conference.AgendaPublishedFrom)>@Conference.AgendaPublishedFrom.ToString("dd/MM/yyyy") - Agenda published</li>
    @if (!Conference.IsSoldOut && !Conference.HideDate)
    {
        <li @Past(Conference.RegistrationOpenUntil)>@Conference.RegistrationOpenUntil.ToString("dd/MM/yyyy") - Registrations closed</li>
    }
    @if (Conference.HideDate)
    {
        <li><em>TBA</em> - <strong>Conference day</strong></li>
    }
    else
    {
        <li @Past(Conference.Date.AddDays(1))>@Conference.Date.ToString("dd/MM/yyyy") - <strong>Conference day</strong></li>
    }
    */