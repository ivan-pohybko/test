export function main(): void {
  feature2()
  console.log('MAIN')
  console.log('hotfix')
  feature1()
}

function feature1(): void {
  console.log('feature1')
}

function feature2(): void {
  console.log('some calculations for feature2')
}
