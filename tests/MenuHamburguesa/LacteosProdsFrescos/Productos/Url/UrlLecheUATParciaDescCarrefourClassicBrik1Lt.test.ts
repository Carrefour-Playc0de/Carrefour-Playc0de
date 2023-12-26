import test from '../../../../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test('Verificar que se accede a la URL de Leche UAT Parcialmente Descremada Carrefour Classic Bbrik 1Lt correctamente', async ({urlLecheUATParciaDescCarrefourClassicBrik1Lt}) => {

    await test.step('Navigate to Leche UAT Parcialmente Descremada Carrefour Classic Bbrik 1Lt', async () => {
        await urlLecheUATParciaDescCarrefourClassicBrik1Lt.navigateToUrlLecheUATParciaDescCarrefourClassicBrik1Lt()
    })
})

