const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    // 1) Get some input values
    const bucket =  core.getInput('bucket',{ required: true });
    const bucketRegion = core.getInput('bucket-region', { required: true });
    const distFolder = core.getInput('dist-folder', { required: true });
    core.notice('Hello from my custom js action');
    core.notice('bucket: ' + bucket);
    core.notice('bucketRegion: ' + bucketRegion);
    core.notice('distFolder: ' + distFolder);

    // 2) Upload Files
    const s3Uri = `S3://${bucket}`;

    exec.exec(`aws s3 sync ${distFolder} ${s3Uri}`); // --region ${bucketRegion}`);
}

run();