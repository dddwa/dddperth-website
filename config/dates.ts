import * as moment from 'moment';
import {Moment} from 'moment';
import {Dates as IDates, Conference, ImportantDate} from './types';

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
    RegistrationOpen : moment(new Date()) > conference.RegistrationOpenFrom && !conference.IsSoldOut
    ImportantDates : [
      {Name: "SubmissionsOpenFrom", Date: moment(new Date()), Description: "Submissions open"},
      {Name: "RegistrationOpenFrom", Date: moment(new Date()), Description: "Registrations open"},
      {Name: "SubmissionsOpenUntil", Date: moment(new Date()), Description: "Submissions closed"},
      {Name: "VotingOpenFrom", Date: moment(new Date()), Description: "Voting open"},
      {Name: "VotingOpenUntil", Date: moment(new Date()), Description: "Voting closed"},
      {Name: "AgendaPublishedFrom", Date: moment(new Date()), Description: "Agenda published"},
      {Name: "RegistrationOpenUntil", Date: moment(new Date()), Description: "Registrations closed"},
      {Name: "ConferenceDay", Date: moment(new Date()), Description: "Conference day"}
    ]
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