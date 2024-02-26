import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburMundoBebeOleoCalcareoTalco extends BasePage {

    readonly OLEO_CALCAREO_TALCO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.OLEO_CALCAREO_TALCO = this.page.locator('//a [@id="menu-item-category-oleo-calcareo-talco"]')
    }

    async clickMundoBebeOleoCalcareoTalco(): Promise<void> {
        await this.click(this.OLEO_CALCAREO_TALCO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburMundoBebeOleoCalcareoTalco(): Promise<void> {
        await this.clickMundoBebeOleoCalcareoTalco()
    }
}
