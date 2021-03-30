import React from 'react';
import ProjectRow from '../components/projects/ProjectRow';

const Projects = () => {
    return (
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Projects</h3>
                <div class="card-tools">
                <button
                    type="button"
                    class="btn btn-tool"
                    data-card-widget="collapse"
                    title="Collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button
                    type="button"
                    class="btn btn-tool"
                    data-card-widget="remove"
                    title="Remove">
                    <i class="fas fa-times"></i>
                </button>
                </div>
            </div>
            <div class="card-body p-0">
                <table class="table table-striped projects">
                <thead>
                    <tr>
                    <th style={{width: "1%"}}>#</th>
                    <th style={{width: "20%"}}>Project Name</th>
                    <th style={{width: "30%"}}>Team Members</th>
                    <th>Project Progress</th>
                    <th style={{width: "8%"}} class="text-center">Status</th>
                    <th style={{width: "20%"}}></th>
                    </tr>
                </thead>
                <tbody>
                    <ProjectRow title="Sleep Tracker" status="success" created="01.12.2020" pc_color="bg-green" pc_complete="60%" members={[{name: "AJ",avatar:"ava1"},{name: "JJ",avatar:"ava2"}]} />
                    <ProjectRow  status="success" title="Cooking App" created="31.07.2021" pc_color="bg-yellow" pc_complete="48%" members={[
                            {name: "Vikas",avatar:"ava3"},
                            {name: "Superb",avatar:"ava7"},
                            {name: "Dojo",avatar:"ava2"}
                        ]} />
                    <ProjectRow  status="late" title="Driver Booking Sys" created="19.07.2021" pc_color="bg-red" pc_complete="18%" members={[
                            {name: "Ajay",avatar:"ava7"}
                        ]} />
                    <ProjectRow  status="failed" title="Todo App" created="19.07.2021" pc_color="bg-red" pc_complete="18%" members={[
                            {name: "Ajay",avatar:"ava7"}
                        ]} />
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default Projects;

