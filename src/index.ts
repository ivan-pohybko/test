export function main(): void {
  feature2()
  console.log('MAIN')
  console.log('hotfix')
  feature1()
  feature3()
}

function feature1(): void {
  console.log('feature1')
}

function feature2(): void {
  console.log('some calculations for feature2')
}


function feature3(): void {
  console.log('some actions for feature3')
}
