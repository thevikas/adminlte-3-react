import React from 'react';

const ProjectRow = ({title,created,pc_complete,pc_color,view_link, members,status}) => {
    let badge_css = "";
    let badge_label = "";
    switch(status)
    {
        case "success":
            badge_css = "badge-success";
            badge_label = "Success";
            break;
        case "late":
            badge_css = "badge-warning";
            badge_label = "Late";
            break;
        case "failed":
            badge_css = "badge-danger";
            badge_label = "Failed";
            break;
    }
    return (
                    <tr>
                        <td>#</td>
                        <td>
                            <a> {title} </a>
                            <br />
                            <small> Created {created} </small>
                        </td>
                        <td>
                            <ul class="list-inline">
                                {members.map(member => <li class="list-inline-item">
                                    <img
                                    alt={member.name}
                                    class="table-avatar"
                                    src={"../../dist/img/" + member.avatar}
                                    />
                                </li>)}
                            </ul>
                        </td>
                        <td class="project_progress">
                            <div class="progress progress-sm">
                            <div
                                class={"progress-bar " + pc_color}
                                role="progressbar"
                                aria-valuenow={pc_complete}
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{width: pc_complete + "%"}}
                            ></div>
                            </div>
                            <small> {pc_complete}% Complete </small>
                        </td>
                        <td class="project-state">
                            <span class={"badge " + badge_css}>{badge_label}</span>
                        </td>
                        <td class="project-actions text-right">
                            <a class="btn btn-primary btn-sm" href="{view_link}">
                            <i class="fas fa-folder"> </i> View
                            </a>
                            <a class="btn btn-info btn-sm" href="{edit_link}">
                            <i class="fas fa-pencil-alt"> </i> Edit
                            </a>
                            <a class="btn btn-danger btn-sm" href="{delete_link}">
                            <i class="fas fa-trash"> </i> Delete
                            </a>
                        </td>
                    </tr>
    );
};

export default ProjectRow;