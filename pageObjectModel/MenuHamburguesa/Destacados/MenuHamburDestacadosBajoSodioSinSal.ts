import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosBajoSodioSinSal extends BasePage {

    readonly BAJO_SODIO_SIN_SAL: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BAJO_SODIO_SIN_SAL = this.page.locator('//div[contains(text(),\'Bajo en sodio y sin sal\')]')
    }

    async clickDestacadosBajoSodioSinSal(): Promise<void> {
        await this.click(this.BAJO_SODIO_SIN_SAL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosBajoSodioSinSal(): Promise<void> {
        await this.clickDestacadosBajoSodioSinSal()
    }
}
